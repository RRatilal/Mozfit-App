import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiPlus, FiTrash } from 'react-icons/fi';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import Week from '../Week';

import './styles.css';

import { useAdmin } from '../../context/admin';

import defaultImage from '../../assets/background.svg'

const defaultValues = {
    description: "Escreve aqui a descricao do plano de treino",
    duration: 0,
    image: {
        name: "default",
        url: defaultImage
    },
    level: "Iniciante",
    target: "Objectivo do plano de treino",
    workoutType: "Novo Workout",
}

interface Props {
    show: boolean;
    onHide(): void;
}

export const Details: React.FC<Props> = (props) => {
    const { workoutDetails } = useAdmin();

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <div className="details-container">
                    <header className="details-header">

                        <div className="header-img">
                            <img
                                src={workoutDetails?.image.url ? workoutDetails?.image.url : defaultValues.image.url}
                                alt={workoutDetails?.image.name ? workoutDetails?.image.name : defaultValues.image.name} />
                        </div>
                        <div className="header-description">
                            <h2>Description</h2>
                            <textarea placeholder={defaultValues.description} value={workoutDetails?.description} onChange={() => { }} />
                        </div>
                    </header>
                    <main className="details-main">
                        <div className="main-left">
                            <form>
                                <label>Target</label>
                                <input placeholder={defaultValues.target} value={workoutDetails?.target} />
                                <label>duration</label>
                                <input
                                    value={workoutDetails?.duration ? workoutDetails?.duration : defaultValues.duration}
                                    contentEditable={false} />
                                <label>Level</label>
                                <input placeholder={defaultValues.level} value={workoutDetails?.level} />
                            </form>
                        </div>
                        <div className="main-right">
                            <header>
                                <h2>Weeks</h2>
                                <div className="header-buttons">
                                    <button className="btn-plus">
                                        <FiPlus />
                                    </button>
                                    <button className="btn-trash">
                                        <FiTrash />
                                    </button>
                                </div>
                            </header>
                            <div className="weeks">
                                {workoutDetails?.weeksList.map((week: any) => (
                                    <Week key={week.id} weekDetails={week} />
                                ))}
                            </div>
                        </div>
                    </main>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal >
    );
}