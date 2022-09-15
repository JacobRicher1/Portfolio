import React from 'react'
import { Column2, 
    ImgWrap, 
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap, 
    Img, 
} from './SkillsElements'

const index = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
    return (
        <>
        <InfoContainer id="skills">
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                    <TextWrapper>
                        <TopLine>My Skills</TopLine>
                        <ImgWrap>
                        <img src={"../../Images/svg-1"}></img>
                        </ImgWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>

                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
    
    )
}

export default index