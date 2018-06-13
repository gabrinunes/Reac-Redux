import React from 'react'
import ReactDom from 'react-dom'
import Family from './family'
import Member from './member'

ReactDom.render(
    <Family lastname='Cunha'>
       <Member name='Gabriel'/>
       <Member name='Ana'/>
       <Member name='Jorge'/>
    </Family>
,document.getElementById('app'))