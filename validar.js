 const validar = (req, res) => {
    if (req.session.usuario) {
      res.status(200).send ('sesión validada')
      
    }else{
      res.status(200).send('No autorizado')
    }
  }
  module.exports= validar;