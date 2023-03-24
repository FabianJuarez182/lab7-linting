import React from 'react'
import './Cards.css'
import PropTypes from 'prop-types'

const infoText = {
  card_1_info:
    'Navigate as usual and we take care of the rest. We offer you browser, tracker blocker and encryption enhancement all in one Chrome extension',
  card_2_info:
    'Search privately with our app or extension, add private web search to your preferred browser, or search duckduckgo.com.',
  card_3_info:
    'Our private mobile browser comes equipped with our search engine, tracker blocker, encryption enhancement and more. Available for iOS and Android.',
}

function Card({ img, title, info }) {
  return (
    <div className="info_card">
      <img src={img} alt="Laptop" className="img_card" />
      <div className="card_title">{title}</div>
      <div className="card_info">{info}</div>
    </div>
  )
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
}

function Cards() {
  return (
    <div className="info_cards_cont">
      <Card
        img="src/assets/laptop.svg"
        title="Privacy for Chrome"
        info={infoText.card_1_info}
      />
      <Card
        img="src/assets/search.svg"
        title="Private Search Engine"
        info={infoText.card_2_info}
      />
      <Card
        img="src/assets/mobile.svg"
        title="Private Browser"
        info={infoText.card_3_info}
      />
    </div>
  )
}

export default Cards
