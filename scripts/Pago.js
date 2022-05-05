const Pago1 =document.getElementById("Formulario1")
        // onsubmit sirve para asociar una funcion de test de algun formulario
          Pago1.onsubmit=(Bnb)=>{
            //   por si sucede algo cancela el evento 
            Bnb.preventDefault();
            let Nusuario =document.getElementById("P1").value
            let Correo =document.getElementById("P2").value
            let Ntarjeta =document.getElementById("P3").value
            let Mmaa =document.getElementById("P4").value
            let Cvv =document.getElementById("P5").value
            if(Nusuario === '' || Correo === '' ||  Ntarjeta === '' || Mmaa === '' ||  Cvv === ''  ){ 
            Swal.fire (
                'Oh no,no lo llenaste!!!',
                'para proceder con tu pago...Llenalo!',
                'warning'
            )
        } else { Swal.fire (
            'Genial!',
            'Cada vez cerca de una nueva historia!',
            'success'
        ) }
        
    
    }
