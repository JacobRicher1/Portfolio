import React from 'react'
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
        </SidebarContainer>
    );
};

const SidebarContainer = styled.div`
    
`

export default Sidebar