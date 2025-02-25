﻿CREATE OR ALTER PROC FI_SP_ConsBeneficiario
	@ID BIGINT
AS
BEGIN
	IF(ISNULL(@ID,0) = 0)
		SELECT NOME, CPF, ID, IDCLIENTE FROM BENEFICIARIOS WITH(NOLOCK)
	ELSE
		SELECT NOME, CPF, ID, IDCLIENTE FROM BENEFICIARIOS WITH(NOLOCK) WHERE ID = @ID
END