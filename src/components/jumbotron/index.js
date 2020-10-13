import React from 'react';
import {Container, Inner, Item, Title, SubTitle, Pane, Image} from './styles/jumbotron';



export default function Jumbotron( { children, direction = 'row', ...restProps } ) {          // user can pass anything. If you pass object it will apply to the first that comes in 
    return (
    
        <Item direction={direction}>
           <Inner>
                {children} 
           </Inner>                                                                                 {/* This is what encapsulates compound components */}
        </Item>

    )
}

Jumbotron.Container = function JumbotronContainer({children, ...restProps}) {
return <Container {...restProps}> {children} </Container>; 
}

Jumbotron.Pane = function JumbotronPane({children, ...restProps}) {
    return <Pane {...restProps}> {children} </Pane>; 
    }

    /* with compound components it gets very repetitive so we can copy and paste */

Jumbotron.Title = function JumbotronTitle({children, ...restProps}) {
    return <Title {...restProps}> {children} </Title>; 
    }

Jumbotron.SubTitle = function JumbotronSubTitle({children, ...restProps}) {
    return <SubTitle {...restProps}> {children} </SubTitle>; 
    }

Jumbotron.Image = function JumbotronImage({...restProps}) {
    return <Image {...restProps} />; 
    }

