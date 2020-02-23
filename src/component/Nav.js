import React, { Component } from 'react';
import { connect } from 'react-redux';

class Nav extends Component {
    handleAdd=(event)=>{
        // console.log(this.props.isEdit);
        event.preventDefault();
        this.props.changeEditStatus();

    }
    render() {

        return (
            <nav className="navbar navbar-expand-sm navbar-dark mb-4" style={{backgroundColor: 'black'}}>
                <a className="navbar-brand" href="/nav">Navbar</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                    {/* <li className="nav-item active">
                        <a className="nav-link" href="/crunnt">Home <span className="sr-only">(current)</span></a>
                    </li> */}
                    <li className="nav-item">
                        <a className="nav-link" href="/list" onClick={(event)=>this.handleAdd(event)}>Thêm mới</a>
                    </li>
                    </ul>
                </div>
                </nav>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        isEdit: state.isEdit
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({
              type:"CHANGE_EDIT_STATUS"
            })
          }
        }
}

export default connect(mapStateToProps,mapDispatchToProps)(Nav);