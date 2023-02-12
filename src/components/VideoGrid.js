import React from 'react'
import {
    Box,
    Typography,
    Card,
    CardMedia,
    CardContent,

} from "@mui/material"
import { Link } from "react-router-dom";
import { TimeFormat } from '../utils/TimeFormat';

const VideoCard = ({ video, sortBy }) => {
    return (
        <Box className="video-tile-link">
            <Card className="video-tile">
                <Link to={`/video/${video._id}`} className="video-tile">
                    <CardMedia
                        component="img"
                        height="250"
                        width="250"
                        sx={{ objectFit: "cover" }}
                        image={video.previewImage}
                        alt="no thumbnail"
                    />
                </Link>
            </Card>

            <CardContent sx={{ display: "flex", flexDirection: "column", gap: "10px", color: "#fff" }}>
                <Typography variant="p">
                    {video.title}
                </Typography>
                <Typography variant="p" component="div">
                    {
                        sortBy === "releaseDate" ?
                            <TimeFormat releaseDate={video.releaseDate} /> :
                            `${video.viewCount} views`
                    }
                    {video.releaseDate}
                </Typography>
            </CardContent>
        </Box>
    )
}

export default VideoCard