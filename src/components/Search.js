import React, { useState } from "react";
import { Input } from "@mui/joy";
import { Button } from "@mui/joy";
import { FormGroup } from "@mui/material";
import {TextField} from "@mui/material";
import axios from "axios";
import {Box} from "@mui/material";
import Typography from '@mui/material/Typography';

const Search = ({setTopicData, setIsOpen, isOpen}) => {
  const [topic, setTopic] = useState()
  
  const changeHandler = (e) => {
    setTopic(e.target.value);
  }
  const handler = () =>{
    setIsOpen(false);
    const fetchData = async () => {
      try {
          const response = await axios.get(`https://newsapi.org/v2/everything?q=${topic}&apiKey=aa1286a5cc7f4119924d9e123179a393`);
          setTopicData(response.data);
      } catch (error) {
          console.error(error);
      }
  };

  fetchData();
  }
  return (
    <>
      <div style={{padding:'20px 0px'}}>
        <FormGroup row sx={{display:'flex', justifyContent:'center'}}>
          <TextField variant="outlined" value={topic} placeholder="Seach" sx={{mx:'4px', my:'6px'}} onChange={changeHandler}/>
          <Button variant="contained" sx={{backgroundColor: "#1976d2", color:"#ffffff",mx:'4px', my:'6px'}} onClick={handler} >
            Search
          </Button>
        </FormGroup>
        {!isOpen?<Box sx={{textAlign:'center', my:'24px'}}><Button onClick={()=>{setIsOpen(true); setTopic('')}}>Back to home</Button></Box>:<></>}
        {!isOpen?<Typography>Showing results for: <b>{topic}</b></Typography>:null}
      </div>
      
    </>
  );
};

export default Search;
