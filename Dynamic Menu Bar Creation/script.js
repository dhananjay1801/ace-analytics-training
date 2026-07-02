const colors = [
    '#FFB7C5', '#C3B1E1', '#AEC6CF', '#B2AC88', '#F4D03F',
    '#D2B48C', '#FFB07C', '#E2A78F', '#C3B091', '#E4D96F',
    '#9FE2BF', '#A0E7E5', '#98B4D4', '#B0C4DE', '#ACACAC',
    '#FF8E97', '#FFA372', '#C1E1C1', '#AAF0D1', '#E0B0FF'
];

let tree = [
    {
        id: 1,
        name: 'root',
        parent: null,
        children: []
    }
];
let id_inc = 2;
let openNodes = new Set();

const nodes = document.querySelectorAll('.node')

nodes.forEach((node) => {
    const icon = node.querySelector('.option');
    const submenu = node.querySelector('.submenu');

    if (!icon || !submenu) return;

    icon.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelectorAll('.submenu').forEach(menu => {
            if (menu !== submenu) {
                menu.classList.add('hidden');
            }
        });
        submenu.classList.toggle('hidden');
    });
});

// close menu on clicking outside focus
document.addEventListener('click', () => {
    document.querySelectorAll('.submenu').forEach(menu => {
        menu.classList.add('hidden');
    });
});

function findNode(nodes, id) {
    for (let node of nodes) {
        if (node.id === id) return node;

        const found = findNode(node.children, id);
        if (found) return found;
    }
    return null;
}

const container = document.querySelector('.menu');

function render(){
    container.innerHTML = "";

    const root = tree[0]; // the root node, never rendered as a visible box

    root.children.forEach(child => {
        container.appendChild(createNode(child));
    });

    container.appendChild(createAddRootButton());
}

function createAddRootButton(){
    const btn = document.createElement('div');
    btn.className = 'add-root-btn';
    btn.innerHTML = `<i class="fa-solid fa-plus"></i>`;

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        let name = prompt("Enter node name:");
        if (name === null) return;
        name = name.trim();
        if (!name) {
            alert("Node name cannot be blank.");
            return;
        }
        addChild(tree, 1, name);
        render();
    });

    return btn;
}

render()

function createNode(node) {
    const nodeEl = document.createElement('div');
    nodeEl.className = 'node';

    nodeEl.innerHTML = `
        <span class="node-label" title=${node.name}>${node.name}</span>
        <i class="fa-solid fa-ellipsis-vertical option"></i>
        <div class="submenu hidden">
            <div class="edit" title="Edit"><i class="fa-regular fa-pen-to-square"></i></div>
            <div class="add" title="Add child"><i class="fa-solid fa-plus"></i></div>
            <div class="del" title="Delete"><i class="fa-solid fa-trash"></i></div>
        </div>
    `;

    nodeEl.style.backgroundColor = colors[node.id % colors.length];

    const icon = nodeEl.querySelector('.option');
    const submenu = nodeEl.querySelector('.submenu');
    const addBtn = nodeEl.querySelector('.add');
    const editBtn = nodeEl.querySelector('.edit');
    const delBtn = nodeEl.querySelector('.del');

    const childContainer = document.createElement('div');
    childContainer.className = 'children';

    if (openNodes.has(node.id)) {
        childContainer.classList.add('open');
    }

    icon.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelectorAll('.submenu').forEach(menu => {
            if (menu !== submenu) menu.classList.add('hidden');
        });
        submenu.classList.toggle('hidden');
    });

    addBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        submenu.classList.add('hidden');

        let name = prompt("Enter node name:");
        if (name === null) return; // cancelled
        name = name.trim();
        if (!name) {
            alert("Node name cannot be blank.");
            return;
        }

        addChild(tree, node.id, name);
        openNodes.add(node.id);
        render();
    });

    editBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        submenu.classList.add('hidden');

        let newName = prompt("Rename node:", node.name);
        if (newName === null) return;
        newName = newName.trim();
        if (!newName) {
            alert("Node name cannot be blank.");
            return;
        }

        editNode(tree, node.id, newName);
        render();
    });

    delBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        submenu.classList.add('hidden');

        if (node.parent === null) {
            alert("Root node cannot be deleted.");
            return;
        }

        const confirmDelete = confirm(
            node.children.length > 0
                ? `Delete "${node.name}" and all its children?`
                : `Delete "${node.name}"?`
        );
        if (!confirmDelete) return;

        deleteNode(tree, node.id);
        render();
    });

    node.children.forEach(child => {
        childContainer.appendChild(createNode(child));
    });

    nodeEl.appendChild(childContainer);

    nodeEl.addEventListener('click', (e) => {
        if (e.target.closest('.option') || e.target.closest('.submenu')) return;
        if (node.children.length === 0) return;
    
        e.stopPropagation();
    
        if (openNodes.has(node.id)) {
            openNodes.delete(node.id);
        } else {
            openNodes.add(node.id);
        }
    
        childContainer.classList.toggle('open');
    });

    return nodeEl;
}

function editNode(nodes, id, newName) {
    const target = findNode(nodes, id);
    if (target) {
        target.name = newName;
        return true;
    }
    return false;
}

function deleteNode(nodes, id) {
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].id === id) {
            nodes.splice(i, 1);
            return true;
        }
        if (deleteNode(nodes[i].children, id)) {
            return true;
        }
    }
    return false;
}

function addChild(nodes, parentId, name){
    for(let node of nodes){
        if(node.id === parentId){
            node.children.push({
                id: id_inc++,
                name,
                parent: parentId,
                children: []
            })
            return true;
        }
        if(addChild(node.children, parentId, name)){
            return true;
        }
        
    }
    return false;
}

