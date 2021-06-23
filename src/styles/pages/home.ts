import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .title {
        text-align: center;

        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--white-500);
        }

        p {
            font-size: 1.5rem;
            font-weight: 500;
            color: var(--yellow-500);
        }
    }

    .register {

        height: 30vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        button {
            margin-top: 1rem;
            width: 250px;
            height: 50px;
            background-color: var(--green-500);

            border: none;
            border-radius: 10px;

            font-size: 1.25rem;
            font-weight: 500;
            color: var(--white-500);

            transition: filter 0.2s;

            &:hover {
                cursor: pointer;
                filter: brightness(0.8);
            }
        }

        .registerNow {
            margin-bottom: 0.25rem;

            width: 200px;
            height: 50px;
            background-color: var(--white-500);

            color: #000;
        }

        span {
            font-size: 0.875rem;
            color: var(--white-500);
        }
    }

    .logo {
        display: flex;
        justify-content: center;
    }

`
