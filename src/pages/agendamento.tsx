import { api } from '../config/api';
import { useState, useEffect, useRef } from 'react';

import { Container, Avatar, AvatarBorder } from '../styles/pages/agendamento';

interface barberProps {
    id: number;
    name: string;
    image: string;
    image_url: string;
}

interface barberPropsGroup {
    [index: string]: barberProps;
}


export default function Booking() {
		const [barbers, setBarbers] = useState([]);
		const barber = useRef('teste');

		const enable = true;

		useEffect(() => {
				api.get("agendamento")
           .then(res => setBarbers(res.data))
           .catch((err) => {
							console.error(err);
           });
		}, []);

		function handleButton(id) {
			alert(id);
		}
	 	
    return (
        <Container>
            <div className="title">
                <h1>Agendamento</h1>
            </div>
            <div className="selectBarbers">
                <h3>Selecione um profissional</h3>
                <div className="barbers">
                    {(barbers.map(
                        (barber: barberProps) => {
                            return (
                                <div className="avatar">
                                    <AvatarBorder open={enable}>
                                        <Avatar 
                                            image={barber.image_url} 
																						key={barber.id}
																						onClick={
																							() => handleButton(barber.id)
																						}
                                        />
                                    </AvatarBorder>
                                    <span>{barber.name}</span>
                                </div>
                            )
                        })
                    )}
                </div>
            </div>  
            <div className="logo">
                <img src="image/logo.svg" alt="Sr. barbeiro" />
            </div>
        </Container>
    )
}
