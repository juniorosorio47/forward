import { useCallback } from "react";
import Head from "next/head";
import { FaPlay, FaSearch } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

import Video from '../../components/Video';
import { Container, NavBar, HomePageHeader, Main, Card, CardContent, CardFooter, SearchForm, Category } from '../../styles/youtube-flix/styles';
import Input from "../../components/Input";

const YoutubeFlix: React.FC = () => {

    const searchHandle = useCallback((data)=>{
        console.log(data)
    },[])

    return <Container>
            <Head>
                <title>Youtube Flix</title>
            </Head>
            <NavBar>
                <div>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"} alt="netflixlogo" />
                </div>
                <ul>
                    <li>Inicio</li>
                    <li>Series</li>
                    <li>Filmes</li>
                    <li>Bombando</li>
                    <li>Minha Lista</li>
                </ul>
                <SearchForm onSubmit={searchHandle}>
                    <Input icon={FaSearch} name="search" type="search"  placeholder="Títulos, Gente e Gêneros"/>
                </SearchForm>
            </NavBar>
            <HomePageHeader 
                backgroundImageUrl="https://occ-0-1551-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeXZMxMDthSyVM3Yxnjk4Rl57kcMimT9BLLpK4E07eR24U9eEUu4cGS1YGEEdWDBf6jcU61nRA3ZEqwWXeKc29gQvwE1.webp?r=ad2"
            >
                <img src="https://occ-0-1551-185.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVVDmr2U9GmM60SyVS644zASu3toNbgROGgEltACgkf4FCSYj-yZz7-tnrXKuWOHPIprL5FARI1lg_vGyR36vXG8nYqEg_427JPnw2155hCMos2AK24nE0emaX4WTAwxfQZ4HyMyHr5AFXJUqmKrE3Yckxhv0gaC3elJgyU6PYiNhA.webp?r=fee" alt="name" />
                <h1>Novos episodios: sábado</h1>
                <p>Amaldiçoado desde o dia em que nasceu, um imortal é movido pelo desejo de recuperar sua alma e finalmente se vingar depois de 600 anos.</p>
                <div>
                    <button><FaPlay/> Assistir</button>
                    <button><AiOutlineInfoCircle/> Mais informações</button>
                </div>
            </HomePageHeader>

            <Main>
                <Category>
                    <h2>Séries</h2>
                    <div>
                        <Card backgroundImageUrl={"https://occ-0-1551-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeujC5-SEpGtTmKSzCXYx1MAfxiXmXaJn0jDIdKLzhYWJE2uF_8-pCrwKvUoupFZW0SblobeusYOJGy9m6MV6LwiHOLE8tjp6gm1F4tvinN9Z0TmjJx6lUmxL5vXkkfSexHhQ_t9UPJ9RurZ9mG7r0YJS0q12EpddpT6kXdYsrq5e3mmT6UGCSE.jpg?r=741"}>
                        
                        </Card>
                        <Card backgroundImageUrl={"https://occ-0-1551-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeujC5-SEpGtTmKSzCXYx1MAfxiXmXaJn0jDIdKLzhYWJE2uF_8-pCrwKvUoupFZW0SblobeusYOJGy9m6MV6LwiHOLE8tjp6gm1F4tvinN9Z0TmjJx6lUmxL5vXkkfSexHhQ_t9UPJ9RurZ9mG7r0YJS0q12EpddpT6kXdYsrq5e3mmT6UGCSE.jpg?r=741"}>
                        
                        </Card>
                        <Card backgroundImageUrl={"https://occ-0-1551-185.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeujC5-SEpGtTmKSzCXYx1MAfxiXmXaJn0jDIdKLzhYWJE2uF_8-pCrwKvUoupFZW0SblobeusYOJGy9m6MV6LwiHOLE8tjp6gm1F4tvinN9Z0TmjJx6lUmxL5vXkkfSexHhQ_t9UPJ9RurZ9mG7r0YJS0q12EpddpT6kXdYsrq5e3mmT6UGCSE.jpg?r=741"}>
                        
                        </Card>
                    </div>
                </Category>

                <Video 
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/OAxZTdhr4Hk" 
                />
            </Main>
    </Container>;
}

export default YoutubeFlix;

