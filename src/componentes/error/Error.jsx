/* eslint-disable react/prop-types */
/* eslint-disable n/handle-callback-err */
import React from 'react'

export default function Error ({ error }) {
  return (
    <div>Error: {error.message}</div>
  )
}
