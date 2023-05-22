import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';


const Topic = (props) => {
    const { topicName } = props
    const [data, setData] = useState()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://newsapi.org/v2/everything?q=${topicName}&apiKey=aa1286a5cc7f4119924d9e123179a393`);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <Grid container spacing={1}>
            {
                data?.articles.map((item, index) => {
                    return (
                        <>
                            <Grid item >
                            <Card sx={{ maxWidth: 345, height: '70vh' }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={item.urlToImage}
                                    title={item.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{WebkitLineClamp: 1, textOverflow: 'ellipsis'}}>
                                        {item?.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{WebkitLineClamp: 1, textOverflow: 'ellipsis'}}>
                                        {item?.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">
                                        <Link href={item?.url} underline="none" target="_blank" rel="noopener">
                                            Learn More
                                        </Link>
                                    </Button>
                                </CardActions>
                            </Card>
                            </Grid>
                        </>
                    )
                })
            }
            </Grid>
        </div>
    )
}

export default Topic;
