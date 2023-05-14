import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple, MDBContainer, MDBCol, MDBRow
} from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../feature/cartSlice';

export default function App() {
    const items = useSelector((state) => state.allCart.items);
    const dispatch = useDispatch();
    return (
        <div className="m-2">
            <MDBContainer>
                <MDBRow className="mb-3">
                    {items.map((item) =>(
                        <MDBCol size="4">
                        <MDBCard>
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage src={item.img} fluid alt='...' />
                                <a>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                </a>
                            </MDBRipple>
                            <MDBCardBody>
                                <MDBCardTitle>{item.title}</MDBCardTitle>
                                <MDBCardText>
                                    ${item.price}
                                </MDBCardText>
                                <MDBBtn onClick={()=> dispatch(addToCart(item))}>Add To Cart Button</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    ))
                        
                    }

                </MDBRow>
            </MDBContainer>
        </div>
    );
}