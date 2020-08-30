import React, {Component} from 'react'
import {Navbar, Nav, FormControl, Button, Container} from 'react-bootstrap'
import {Link, Redirect} from 'react-router-dom'

class MainNavbar extends Component {
    constructor() {
        super()
        this.state = {matchId: "", redirect: false, invalidSearchParam: true, loadInvalidSearchMsg: false}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // updates state to perform redirect to desired page
    handleSubmit(event) {
        event.preventDefault()
        if (!event.target.value || event.target.value.length === 0) {
            this.setState({loadInvalidSearchMsg: true})
        }
        if (!this.state.invalidSearchParam) {
            this.setState({redirect: true})
        }
    }

    // handles text field update - passes this on as query param to match page
    handleChange(event) {
        if (event.target.value.length === 0) {
            this.setState({loadInvalidSearchMsg: false})
        }
        else if (!/^\d+$/.test(event.target.value)) {
            this.setState({invalidSearchParam: true, loadInvalidSearchMsg: true})
        } else {
            this.setState({invalidSearchParam: false, loadInvalidSearchMsg: false})
        }
        this.setState({matchId: event.target.value})
    }

    render() {
        if (this.state.redirect) {
            // this.setState({redirect: false})
            return <Redirect to={`/match/${this.state.matchId}`} />
        }
        return (
            <div>
            <Container fluid>
                <Navbar bg="dark" expand="lg">
                <Container className="large-container">
                    <Navbar.Brand href="#home">D-o-t-A</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Link to="/">Home</Link>
                        {/* <Link to="/match/1234">Match</Link> so this works for query params */}
                        <Link to="/heroes">Heroes</Link>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                        <form onSubmit={this.handleSubmit}>
                        {/* <Form inline> */}
                            <FormControl value={this.state.matchId} type="text" placeholder="Match ID" onChange={this.handleChange} className="mr-sm-2" />
                            <Button type="submit" variant="outline-success">Search</Button>
                            {this.state.loadInvalidSearchMsg ? <p>Invalid</p> : null}
                        {/* </Form> */}
                        </form>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                </Container>
            </div>
        )
    }
}

export default MainNavbar