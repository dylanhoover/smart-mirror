import React, { useState } from 'react'
import './ModularComponent.css'
import { Modal, IconButton, Card, Typography, Box, Select, InputLabel, FormControl, MenuItem } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import WeatherComponent from '../CustomComponents/WeatherComponent';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function ModularComponent() {
    const [componentNotActive, setComponentNotActive] = useState(true);
    const [showWeatherComponent, setShowWeatherComponent] = useState(false);
    const [selectionModalOpen, setSelectionModalOpen] = useState(false);
    const [componentSelect, setComponentSelect] = useState('');
   

    const componentDict = {
        'weather': <WeatherComponent />,
        // 'news' : <NewsComponent />,
        // 'calendar' : <CalendarComponent />,
        // 'clock' : <ClockComponent />,
        // 'music' : <MusicComponent />,
        // 'rotatingPicture' : <RotatingPictureComponent />,
    }

    const handleSelectionModalClose = () => setSelectionModalOpen(false)

    const handleComponentChange = (displayComponent) => {
        setComponentSelect(componentDict[displayComponent])
        switch(displayComponent){

        }    
    }

    const handleComponentSelect = (event) => {
        handleComponentChange(event.target.value)
        setComponentNotActive(false)
        setSelectionModalOpen(false)
    }

    return (
        <div>
            <Card>
                {componentNotActive ? <IconButton onClick={setSelectionModalOpen}><AddCircleIcon /></IconButton> : componentSelect}
            </Card>
            <Modal
                open={selectionModalOpen}
                onClose={handleSelectionModalClose}
            >
                <Box sx={style}>
                    <FormControl fullWidth>
                        <InputLabel id='custom-component-select-label'>Select a component</InputLabel>
                        <Select
                            labelId='custom-component-select-label'
                            id='custom-component-select'
                            value={componentSelect}
                            label='Select a component'
                            onChange={handleComponentSelect}
                        >
                            <MenuItem value='weather'>Weather</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Modal>
        </div>
    )
}