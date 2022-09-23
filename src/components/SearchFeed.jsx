import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';


const SearchFeed = () => {

  const [videos, setVideos] = useState([])
  const { searchTerm} = useParams();
  // whatever i am providing the variable in the useEffect we have to give it to the dependency array 
  // which means it is going to recall this function whenever we change a category it will change the content 
  //  and the title as well
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box p={2} sx={{
      overflowY: 'auto',
      height: '90vh', flex: 2
    }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{
        color: "white"
      }}>
        Search Results for :  <span style={{ color: '#FC1503' }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed;