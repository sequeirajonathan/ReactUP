import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class Nav extends Component {
    state = { activeItem: 'Orders' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Segment inverted>
                <Menu inverted pointing secondary>
                    <Menu.Item name='Orders' active={activeItem === 'Orders'} onClick={this.handleItemClick} />
                    <Menu.Item
                        name='Customer Details'
                        active={activeItem === 'Customer Details'}
                        onClick={this.handleItemClick}
                        disabled
                    />
                    <Menu.Item
                        name='Line Items'
                        active={activeItem === 'Line Items'}
                        onClick={this.handleItemClick}
                        disabled
                    />
                    <Menu.Item
                        name='Payment Portal'
                        active={activeItem === 'Payment Portal'}
                        onClick={this.handleItemClick}
                        disabled
                    />

                    <Menu.Item
                        name='Order Summary'
                        active={activeItem === 'Order Summary'}
                        onClick={this.handleItemClick}
                        disabled
                    />
                </Menu>
            </Segment>
        )
    }
}