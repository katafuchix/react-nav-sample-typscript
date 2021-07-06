import React from 'react';
import * as common from '../common/BasePage';
import { Redirect, withRouter } from 'react-router-dom';
import AppDataStore from '../../stores/AppDataStore'
import classNames from "classnames";
import { Container, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';

class List extends common.BasePage<common.IProps<common.IParams>, common.IState> {

  constructor(props: common.IProps<common.IParams>) {
    super(props);
    console.log(props);
    this.state = {
    }
  }

  render() {
    return (



              <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-4 mb-4 grid-margin">
                      <div className="card h-100">
                          <h4 className="card-header">Card Title</h4>
                          <div className="card-body">
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                          </div>
                          <div className="card-footer">
                          <Link
      className="btn btn-outline-light btn-lg"
      role="button"
      to="/about"
      >
      about
      </Link>
                          </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-4 grid-margin">
                      <div className="card h-100">
                          <h4 className="card-header">Card Title</h4>
                          <div className="card-body">
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsam eos, nam perspiciatis natus commodi similique totam consectetur praesentium molestiae atque exercitationem ut consequuntur, sed eveniet, magni nostrum sint fuga.</p>
                          </div>
                          <div className="card-footer">
                            <Button variant="btn btn-primary">Learn More</Button>
                          </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-4 grid-margin">
                      <div className="card h-100">
                          <h4 className="card-header">Card Title</h4>
                          <div className="card-body">
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                          </div>
                          <div className="card-footer">
                            <Button  variant="btn btn-primary">Learn More</Button>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
/*
      <MDBContainer fluid>
      <MDBRow>
        <MDBCol>
          <MDBCard wide>
            <MDBCardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg" />
            <MDBCardBody cascade>
              <MDBCardTitle>MDBCard title</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
              <MDBBtn href="#">MDBBtn</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard narrow>
            <MDBCardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" />
            <MDBCardBody cascade>
              <MDBCardTitle>MDBCard title</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
              <MDBBtn href="#">MDBBtn</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard cascade>
            <MDBCardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/men.jpg" />
            <MDBCardBody cascade>
              <MDBCardTitle>MDBCard title</MDBCardTitle>
              <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
              <MDBBtn href="#">MDBBtn</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      </MDBContainer>*/
    )
  }
}

export default withRouter(AppDataStore.withStores(List));
