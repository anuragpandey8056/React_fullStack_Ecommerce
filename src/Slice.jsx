import { createSlice } from "@reduxjs/toolkit";
import {  message } from 'antd';



const Myslice=createSlice({
    name:"cart",
    initialState:{
        cart:[],
        search:""

    },
    reducers:{
        addtoCart:(state,actions)=>{
            console.log(actions.payload)
            const myData= state.cart.filter(key=>key.id==actions.payload.id);
            if (myData.length>=1)
            {
                message.error("This product Aleready Added!")
            }
            else 
            {
                state.cart.push(actions.payload);
              
            }
        },
        ItemRemove:(state,action)=>{
        
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        },
        qntyInc:(state, actions)=>{

            for (var i=0; i<state.cart.length; i++)
            {
                if (state.cart[i].id==actions.payload.id)
                {
                    state.cart[i].qnty++;
                }
            }
        },
        qntyDec:(state, actions)=>{

            for (var i=0; i<state.cart.length; i++)
            {
                if (state.cart[i].id==actions.payload.id)
                {
                    if(state.cart[i].qnty>1){
                        state.cart[i].qnty--;
                    }
                    else{

                    }
                    
                }
            }
        },
        searchbox:(state,actions)=>{
            state.search = actions.payload;
            // alert(actions.payload)
        }


        }

    })

export const {addtoCart,qntyInc,qntyDec,searchbox,ItemRemove}=Myslice.actions;
export default Myslice.reducer;