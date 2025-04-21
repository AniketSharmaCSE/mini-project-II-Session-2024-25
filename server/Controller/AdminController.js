const express = require('express')

const getCredentials = (req, res) => {
    const Credentials = { "username": "petcare@123", "password": "12345" }
    res.status(200).json(Credentials)
}

module.exports = { getCredentials }