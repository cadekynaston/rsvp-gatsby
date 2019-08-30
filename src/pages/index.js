import React, { useState, useRef } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Header } from '../components/header'
import { MainContent } from "../components/MainContent";

const IndexPage = () => {
  const [isFiltered, setIsFiltered] = useState(false)
  const [pendingGuest, setPendingGuest] = useState('')
  const [guests, updateGuests] = useState([])
  let lastGuestId = useRef(0);

  const newGuestId = () => {
    const id = lastGuestId.current
    lastGuestId.current = lastGuestId.current + 1
    return id
  }

  const toggleGuestProperty = (property, id) => {
    updateGuests(prevState => prevState.map((guest) => {
      if (guest.id === id) {
        guest[property] = !guest[property]
      }
      return guest
    }))
  }

  const removeGuestAt = id => {
    updateGuests(prevState => prevState.filter(guest => id !== guest.id))
  }

  const toggleConfirmationAt = id => {
    toggleGuestProperty('isConfirmed', id)
  }

  const toggleIsEditingAt = id => {
    toggleGuestProperty('isEditing', id)
  }

  const setNameAt = (name, id) => {
    updateGuests(prevState => prevState.map(guest => {
      if (id === guest.id) {
        guest['name'] = name
      }
      return guest
    }))
  }

  const handleInviteSubmit = e => {
    e.preventDefault()
    const id = newGuestId();
    updateGuests(prevState => {
      return [
        {
          name: pendingGuest,
          isConfirmed: false,
          isEditing: false,
          id
        },
        ...prevState
      ]
    })

    setPendingGuest('')
  }

  const toggleSetFiltered = () => setIsFiltered(prevState => !prevState)
  const totalInvited = guests.length
  const confirmed = guests.filter(guest => guest.isConfirmed).length

  return  (
    <Layout>
      <SEO title="Home" />
      <div className="App">
        <Header
          setPendingGuest={setPendingGuest}
          handleInviteSubmit={handleInviteSubmit}
          pendingGuest={pendingGuest} />
        <MainContent
          toggleSetFiltered={toggleSetFiltered}
          isFiltered={isFiltered}
          totalInvited={totalInvited}
          getConfirmed={confirmed}
          guests={guests}
          setNameAt={setNameAt}
          pendingGuest={pendingGuest}
          toggleConfirmationAt={toggleConfirmationAt}
          toggleIsEditingAt={toggleIsEditingAt}
          removeGuestAt={removeGuestAt} />
      </div>
    </Layout>
  )
}


export default IndexPage
