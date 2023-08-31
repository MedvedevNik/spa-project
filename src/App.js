import React from 'react';
import Header from './components/Header/Header';
import { Route, Routes, Navigate } from 'react-router-dom'; 
import styled from "@emotion/styled";

import HomePage from './pages/home';
import ProjectPage from './pages/project';

const AppContainer = styled.div`
    padding-bottom: 100px;
	
	.container {
		max-width: 1000px;
		padding: 0 20px;
		margin: 0 auto;
	}
`;

function App() {
    return (
        <AppContainer>
            <Header brand='Иван Иванов'></Header>
            <main>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/project' element={<ProjectPage />} />
                    <Route path='*' element={<Navigate to="/" />} />
                </Routes>
            </main>
        </AppContainer>
    );
}

export default App;