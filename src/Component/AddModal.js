import React from "react";
import { Modal, Button } from "react-bootstrap";


class AddModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            name:'',
            image:'',
            rating:'',
            year:'',



        };
    }
    handleShow = () => {
        this.setState({ show: !this.state.show });
    };

    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })

    }
    handleAdd = (e) => {
        const {name , image , rating , year} = this.state
        this.props.add({name , image , rating , year})
        
        e.preventDefault()
        this.handleShow()
    }

    render() {
        console.log('props',this.props)
        return (
            <div>
                <Button variant="primary" onClick={this.handleShow}>
                    +
                </Button>
                <Modal show={this.state.show} onHide={this.handleShow}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add new Movie</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div>
                                <label className="input">Title:</label>
                                <input type="text" name="name" onChange={this.handleChange} />
                            </div>
                            <div>
                                <label className="input">Image:</label>
                                <input type="text" name="image" onChange={this.handleChange} />
                            </div>
                            <div>
                                <label className="input">Rating:</label>
                                <input type="text" name="rating" onChange={this.handleChange} />
                            </div>
                            <div>
                                <label className="input">Year:</label>
                                <input type="text" name="year" onChange={this.handleChange} />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleShow}>
                            Close
                        </Button>
                        <button variant="primary" onClick={this.handleAdd}>Add Movie</button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
export default AddModal;