import { useState } from 'react'
import { Container, Paper, Typography, Box, Button } from '@mui/material'

const serviceList = ["service 1", "service 2", "service 3"];

function App() {

  return (
    <Container>
      <Typography variant='h1'
        sx={{ my: 4, textAlign: "center", color: "primary.main" }}
      >
        Services
      </Typography>
      <Typography variant='h2'>Overview</Typography>
      <Box sx={{
        pt: 4,
        display: 'flex',
        flexDirection: {xs: 'column', md:'row'},
        justifyContent: 'space-between',
        gap: 4,
      }}>
        {serviceList.map((service) => (
          <Paper elevation={3} sx={{width: {xs:1, md: 320}}}>
            <Box sx={{m: 3}}>
              <Typography variant='h3'>{service}</Typography>
              <Typography sx={{ mt: 2 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis atque delectus voluptatum facilis, quod provident aspernatur necessitatibus quis quaerat, sapiente facere voluptas. At quis fuga hic placeat debitis asperiores consequatur, quos ducimus. Reiciendis neque consectetur sed culpa dolore dolores inventore excepturi, odio totam quibusdam ratione minima commodi nihil! Impedit, laboriosam!
              </Typography>
              <Button variant='contained' color='secondary' sx={{mt: 2}}>Learn More</Button>
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  )
}

export default App
