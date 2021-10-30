import React from 'react'

const Header = ({ profileImage, heading, subheading, link }) =>
    <div style={styles.main}>
        <a href={link} target="_blank" style={styles.a}>
            {profileImage && <img style={styles.img} src={profileImage} />}
        </a>
        <a href={link} target="_blank" style={styles.a}>
            <span style={styles.text}>
                <p style={styles.heading}>{heading}</p>
                <p style={styles.subheading}>{subheading}</p>
            </span>
        </a>
    </div>

const styles = {
    a: {
        color: 'rgba(255, 255, 255, 1)',
        textDecoration: 'none',
    },
    main: {
        display: 'flex',
        alignItems: 'center',
        zIndex: 999999999999,
    },
    img: {
        width: 40,
        height: 40,
        borderRadius: 40,
        marginRight: 10,
        filter: 'drop-shadow(0 0px 2px rgba(0, 0, 0, 0.5))',
        border: '2px solid rgba(255, 255, 255, 0.8)'
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        filter: 'drop-shadow(0 0px 3px rgba(0, 0, 0, 0.9))'
    },
    heading: {
        fontSize: '1rem',
        color: 'rgba(255, 255, 255, 0.9)',
        margin: 0,
        marginBottom: 2
    },
    subheading: {
        fontSize: '0.6rem',
        color: 'rgba(255, 255, 255, 0.8)',
        margin: 0
    }
}

export default Header