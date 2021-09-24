import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const AddMovie = ({ setHandleShow, addMovie }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handeleShow = () => setShow(true);

    const handleshow = () => {
        setHandleShow(false);
    };

    const [newmovie, setNewMovie] = useState({
        title: "",
        description: "",
        posteUrl: "",
        rating: 0,
    });

    let onChangehand = (e) => {
        setNewMovie({ ...newmovie, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Button className="newM" variant="primary" onClick={handeleShow}>
                Add New
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add New Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div>
                            <label className="input">Title:</label>
                            <input onChange={onChangehand} type="text" name="name" required />
                        </div>
                        <div>
                            <label className="input">Image:</label>
                            <input
                                onChange={onChangehand}
                                type="text"
                                name="posterurl"
                                required
                            />
                        </div>
                        <div>
                            <label className="input">Rating:</label>
                            <input
                                onChange={onChangehand}
                                type="text"
                                name="rating"
                                required
                            />
                        </div>
                        <div>
                            <label className="input">Description:</label>
                            <input
                                onChange={onChangehand}
                                type="text"
                                name="descreption"
                                required
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => addMovie(newmovie)}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddMovie;