import React, {useState} from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import Video from '../../Videos/video.mp4'
import { Button } from '../ButtonElement'

const HeroSection= () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Hello, I'm Jacob Richer</HeroH1>
                <HeroP>
                    I'm a full-stack web developer
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="about"                             smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80} onMouseEnter={onHover} 
                    onMouseLeave={onHover}>
                    View my work  {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection