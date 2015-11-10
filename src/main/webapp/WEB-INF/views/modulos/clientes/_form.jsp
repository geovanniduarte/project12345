<div class="form-group">
  <label for="title" class="col-sm-2 control-label">Nombre</label>
  <div class="col-sm-10">
    <input type="text" ng-model="cliente.clienomb" class="form-control" id="title" placeholder="Nombre del cliente"/>
  </div>
</div>
<div class="form-group">
  <label for="year" class="col-sm-2 control-label">Direccion</label>
  <div class="col-sm-10">
    <input type="text" ng-model="cliente.cliedire" class="form-control" id="year" placeholder="Direccion"/>
  </div>
</div>
<div class="form-group">
  <label for="director" class="col-sm-2 control-label">Actividad</label>
  <div class="col-sm-10">
   <select id="sexo" name="sexo" type="checkbox" ng-model="cliente.clieacti" ><option value="">--Elige opcion--</option><option value="1">Actividad 1</option><option value="2">Actividad 2</option></select>
  </div>
</div>
<div class="form-group">
  <label for="plot" class="col-sm-2 control-label">Fecha</label>
  <div class="col-sm-10">
    <input type="text" ng-model="cliente.cliefecr" class="form-control" id="plot" />
  </div>
</div>
<div class="form-group">
<div class="col-sm-offset-2 col-sm-10">
  <input type="submit" class="btn btn-primary" value="Save"/>
</div>
