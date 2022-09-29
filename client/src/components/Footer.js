import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';

const Footer = () => {

      return (
        
    <MDBFooter bgColor='black' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
               El Manbet 
              </h6>
              <p>
              Par son esprit novateur, El Manbet  perçoit  chaque défi comme une opportunité. Son objectif principal est de mettre à la disposition des agriculteurs ainsi des pépiniéristes des plants certifiés  de haute qualité, sélectionnés, adaptés  aux exigences de chaque région et surtout répondant aux besoins des agriculteurs. .
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                Plants olivier
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Plants d'agrumes
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Plants fruitiers
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Plants Déco
                </a>
              </p>
            </MDBCol>


            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Testour
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                ElManbet@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 216 21 129 785
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 216 55 068 339
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='https://ElManbet.com/'>
        ElManbet.com
        </a>
      </div>
    </MDBFooter>
      );
    }
 

export default Footer