import React, { useState, useEffect } from 'react'
import { apiShuffle, socketShuffle } from './shuffle.service'

const signalR = require('@aspnet/signalr')

export default function Shuffle({ action }) {
  const [cards, setCards] = useState([])

  useEffect(() => {
    let connection = new signalR.HubConnectionBuilder()
      .withUrl(process.env.REACT_APP_HOST_URL + '/deckHub')
      .build()

    connection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))

    connection.on('SocketShuffle', data => {
      setCards(data)
    })

    if (action !== undefined) {
      if (action === 'api') doApiShuffle()
      else doSocketShuffle()
    }
  }, [action])

  const doApiShuffle = event => {
    if (event !== undefined) event.preventDefault()
    apiShuffle()
      .then(response => {
        setCards(response.data)
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  const doSocketShuffle = event => {
    if (event !== undefined) event.preventDefault()
    socketShuffle()
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  return (
    <div>
      <div className="text-center py-5">
        <button className="btn btn-primary mx-5" onClick={doApiShuffle}>
          API Shuffle
        </button>
        <button className="btn btn-primary" onClick={doSocketShuffle}>
          Socket Shuffle
        </button>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="row hidden-md-up">
            {cards.map((value, key) => {
              return (
                <div key={key} className="col-md-1 col-sm-6">
                  <div className="card border-0 py-1">
                    <div className="card-block">
                      <img
                        src={process.env.REACT_APP_HOST_URL + value.imageUrl}
                        className="rounded"
                        style={{ width: 'auto', height: '230px' }}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
