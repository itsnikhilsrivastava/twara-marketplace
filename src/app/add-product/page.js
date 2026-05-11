"use client"
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

// आपका डेटाबेस कनेक्शन
const supabase = createClient(
  'https://rtzcivrvzxtmaexbibbd.supabase.co', 
  'sb_publishable_tXZyvLL55m_zkCvsQKBeVg_EyFsEBGz'
)

export default function Page() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const saveProduct = async () => {
    if(!name || !price) return alert("कृपया जानकारी भरें");
    
    const { error } = await supabase
      .from('products')
      .insert([{ name, vendor_price: Number(price) }])
    
    if (error) alert("गड़बड़ हुई: " + error.message)
    else alert("सामान सफलतापूर्वक Twara पर लिस्ट हो गया!");
  }

  return (
    <div style={{ padding: '20px', color: 'black', background: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <h2 style={{ color: '#2563eb' }}>Twara - नया सामान जोड़ें</h2>
      <div style={{ marginBottom: '15px' }}>
        <p>सामान का नाम:</p>
        <input onChange={e => setName(e.target.value)} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <p>आपकी कीमत (Vendor Price):</p>
        <input type="number" onChange={e => setPrice(e.target.value)} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
      </div>
      <button onClick={saveProduct} style={{ width: '100%', background: '#2563eb', color: 'white', padding: '15px', border: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
        सामान लिस्ट करें
      </button>
    </div>
  )
  }
