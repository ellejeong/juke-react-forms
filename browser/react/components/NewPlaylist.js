import React from 'react';
import { Link } from 'react-router';


const NewPlaylist = function (props) {

const inputIsInvalid = (props.inputValue.length > 16) || (props.inputValue === '');
const inputTooLong = (props.inputValue.length > 16);
const inputMissing = (props.inputValue === '') && (props.submissionAttempted === true);

return (
<div className="well">
  <form className="form-horizontal" onSubmit={props.handleSubmit}>
    <fieldset>
      <legend>New Playlist</legend>
      <div className="form-group">
        <label className="col-xs-2 control-label">Name</label>
        <div className="col-xs-10">
          <input className="form-control" type="text" value={props.inputValue} onChange={props.handleChange}/>
        </div>
      </div>
      <div className="form-group">
        <div className="col-xs-10 col-xs-offset-2">
        {inputIsInvalid ? null : <button type="submit" className="btn btn-success">Create Playlist</button>}
        {inputTooLong ? <p className="box box-border">Input must be less than 16 characters.</p> : null}
        {inputMissing ? <p className="box box-border">Please enter a name.</p> : null}

        </div>
      </div>
    </fieldset>
  </form>
</div>
)}


export default NewPlaylist;
