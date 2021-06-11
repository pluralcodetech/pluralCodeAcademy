import React from 'react'

import user from '../../src/Assets/image/users/user-6.jpg'

const Profile = () => {
    return (
        <div className="text-center">
            <img src={user} className="rounded-circle m-auto" id="profile" alt="user" />
            
            <div className="profileText text">
                <h4>Stanley Parker</h4>
                <p>Admin Head</p>
            </div>
        </div>
    )
}

export default Profile
