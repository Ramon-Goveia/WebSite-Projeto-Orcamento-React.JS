import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Jumbotron,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

function HomePage() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <Container>
                    <NavbarBrand href="/">Rhayp</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Orçamento</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>

            <Jumbotron className="pg-orcamento"> 
                <style>
                    {`.pg-orcamento{
                        backgrownd-color: #f5fbfa;
                        color: #17a2b8;
                        padding-top: 50px;
                        padding-bottom: 150px;
                        margin-bottom: 0rem !important;
                    }`}
                </style>
                <Container>
                    <h1 className="display-4 text-center">Nossos consultores estão prontos para lhe ajudar!</h1>
                    <p className="lead text-center mb-4">Deixe seus contatos abaixo que em breve retornaremos com uma propósta específica para sua necessidade.</p>

                    <Form>
                        <FormGroup>
                            <Label for="name">Nome</Label>
                            <Input type="text" name="name" id="name" placeholder="Preencha com o nome completo" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Preencha com seu melhor email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">Telefone</Label>
                            <Input type="text" name="phone" id="phone" placeholder="(XX) XXXX-XXXX" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="whatsapp">Whatsapp</Label>
                            <Input type="text" name="whatsapp" id="whatsapp" placeholder="(XX) XXXX-XXXX" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="msg">Conteúdo</Label>
                            <Input type="textarea" name="msg" id="msg" placeholder="Fale um pouco sobre seu projeto" />
                        </FormGroup>

                        <Button type="submit" outline color="info">Enviar</Button>
                    </Form>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default HomePage