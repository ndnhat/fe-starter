"use strict";

var React = require('react');

var ProfileForm = module.exports = React.createClass({
  displayName: "profileForm",
  changeProfile(key, value) {
    this.props.onChange(this.props.profile.set(key, value));
  },
  render() {
    const {profile} = this.props;

    //let profileValue = profile && profile.
    return (
      <div>
          {profile.map((value, key) =>
            typeof value === 'object' && value !== null
            ? <ProfileForm
                profile={value}/>
            : <div> 
                {key}
                <input type="text" value={value} onChange={value => changeProfile(key, value)} />
              </div>).toArray()}
      </div>
    );

  }
});
