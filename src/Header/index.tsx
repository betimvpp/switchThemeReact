import * as C from './styles';
import nuLogo from '../assets/nubank2.svg';
import nuLogo2 from '../assets/nubank1.svg';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';

interface Props{
    toggleTheme(): void;
}

export const Header = ({toggleTheme}:Props) =>{
    const {colors, title} = useContext(ThemeContext)

    return(
        <C.Container>
            <img src={title == 'light' ? nuLogo : nuLogo2}/>

            <Switch
                onChange={toggleTheme}
                checked={title == 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={colors.tertiary}
                onColor={colors.quaternary}
            />
        </C.Container>
    )
}