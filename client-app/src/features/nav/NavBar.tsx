import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'

interface IProps {
    openCreateForm: () => void;
}

const NavBar: React.FC<IProps> = ({openCreateForm}) => {
    return (
        <div>
            <Menu fixed="top" inverted>
                <Container>
                    <Menu.Item header>
                        <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}></img>
                        Reactivities
                    </Menu.Item>
                    <Menu.Item name='Activities'/>
                    <Menu.Item>
                        <Button positive onClick={openCreateForm} content="Create Activity" />
                    </Menu.Item>    
                </Container>
                
            </Menu>
        </div>
    )
}

export default NavBar