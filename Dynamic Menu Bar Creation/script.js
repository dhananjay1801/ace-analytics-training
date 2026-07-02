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

const container = document.querySelector('.tree');
const selectNode = document.getElementById('select-node');
const inputName = document.getElementById('input-name');
const addBtn = document.getElementById('add-btn');
const saveBtn = document.getElementById('save-btn');
let editingId = null;

function findNode(nodes, id) {
    for (let node of nodes) {
        if (node.id === id) return node;
        const found = findNode(node.children, id);
        if (found) return found;
    }
    return null;
}

function render() {
    container.innerHTML = "";

    const root = tree[0];

    root.children.forEach(child => {
        container.appendChild(createNode(child, 0));
    });

    renderSelectOptions();
}

function renderSelectOptions() {
    const previousValue = selectNode.value;
    selectNode.innerHTML = "";

    function addOptions(nodes) {
        nodes.forEach(node => {
            const opt = document.createElement('option');
            opt.value = node.id;
            opt.textContent = node.name;
            selectNode.appendChild(opt);
            addOptions(node.children);
        });
    }

    addOptions(tree);

    if (previousValue && [...selectNode.options].some(o => o.value === previousValue)) {
        selectNode.value = previousValue;
    } else {
        selectNode.value = String(tree[0].id);
    }
}

addBtn.addEventListener('click', () => {
    const parentId = selectNode.value;
    const name = inputName.value.trim();

    if (!parentId) {
        alert('Please select a node to add a child to.');
        return;
    }
    if (!name) {
        alert('Node name cannot be blank.');
        return;
    }

    addChild(tree, Number(parentId), name);
    inputName.value = '';
    render();
});

inputName.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addBtn.click();
});

render();

function createNode(node, depth) {
    const nodeEl = document.createElement('div');
    nodeEl.className = 'node';
    nodeEl.style.marginLeft = `${depth + 60}px`;

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    nodeEl.innerHTML = `
        <div class="node-top">
            <span class="node-label" title="${node.name}">${node.name}</span>

            <div class="submenu">
                <div class="edit" title="Edit"><i class="fa-regular fa-pen-to-square"></i></div>

                <div class="del" title="Delete"><i class="fa-solid fa-trash"></i></div>
            </div>
        </div>
    `;

    const nodeTop = nodeEl.querySelector('.node-top');
    nodeTop.style.backgroundColor = randomColor;

    const submenu = nodeEl.querySelector('.submenu');
    const editBtn = nodeEl.querySelector('.edit');
    const delBtn = nodeEl.querySelector('.del');

    editBtn.addEventListener('click', (e) => {
        e.stopPropagation();
    
        editingId = node.id;
        inputName.value = node.name;
        selectNode.value = String(node.parent);
    
        addBtn.classList.add('hidden');
        saveBtn.classList.remove('hidden');
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

    if (node.children.length > 0) {
        const childContainer = document.createElement('div');
        childContainer.className = 'children';

        node.children.forEach(child => {
            childContainer.appendChild(createNode(child, depth + 1));
        });

        nodeEl.appendChild(childContainer);
    }

    return nodeEl;
}

saveBtn.addEventListener('click', () => {
    const name = inputName.value.trim();
    if (!name) {
        alert('Node name cannot be blank.');
        return;
    }

    editNode(tree, editingId, name);

    editingId = null;
    inputName.value = '';
    saveBtn.classList.add('hidden');
    addBtn.classList.remove('hidden');

    render();
});

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

function addChild(nodes, parentId, name) {
    for (let node of nodes) {
        if (node.id === parentId) {
            node.children.push({
                id: id_inc++,
                name,
                parent: parentId,
                children: []
            });
            return true;
        }
        if (addChild(node.children, parentId, name)) {
            return true;
        }
    }
    return false;
}