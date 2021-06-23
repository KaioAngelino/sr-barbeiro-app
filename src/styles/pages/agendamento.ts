import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .title {
        
        h1 {
            font-size: 1.5rem;
            color: var(--yellow-500);
        }
    }

    .selectBarbers {
        display: flex;
        flex-direction: column;
        height: 40vh;
        align-items: center;
        justify-content: center;
        h3 {
            font-size: 1.25rem;
            color: var(--white-500);
        }

        .barbers {
            margin-top: 1rem;
            display: flex;
            justify-content: space-between;
            width: 100%;
            
            .avatar {
                display: flex;
                flex-direction: column;
                text-align: center;
                color: var(--white-500);

                span {
                    margin-top: 0.25rem;
                }
            }
        }
    }
`

interface avatarProps {
    image: string;
}

export const Avatar = styled.button<avatarProps>`
    background: url(${props => props.image || 'image/logo.svg'}) no-repeat;
    background-size: cover;
    background-position: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;

    &:hover {
        cursor: pointer;
    }
`

interface barberEnable {
    open: boolean;
}

export const AvatarBorder = styled.div<barberEnable>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 2px solid ${props => props.open ? 'var(--green-500)' : 'var(--red-500)'};
    opacity: ${props => props.open ? '1' : '0.5'};
`
