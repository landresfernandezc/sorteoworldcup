CREATE TABLE usuarios(
	nombre VARCHAR(50),
	apellido1 VARCHAR(50),
	apellido2 VARCHAR(50),
	contraseña CHAR(4) NOT NULL,
	fecha TIMESTAMP,
	nombre_usuario VARCHAR(50) PRIMARY KEY	
);

CREATE TABLE sorteos(
	id_sorteos SERIAL PRIMARY KEY,
	nombre_usuario VARCHAR(50),
	CONSTRAINT FK_nmbre_u FOREIGN KEY(nombre_usuario) REFERENCES usuarios
);

CREATE TABLE Grupos_sorteo(
	id_sorteo INT,
	nombre_grupo CHAR(6) PRIMARY KEY,
	CONSTRAINT FK_id_sorteO FOREIGN KEY(id_sorteo) REFERENCES sorteos
);

CREATE TABLE Grupo_posicion(
	nombre_grupo_posicion CHAR(2) PRIMARY KEY,
	id_sorteo INT NOT NULL,
	CONSTRAINT FK_id_sorteo FOREIGN KEY(id_sorteo) REFERENCES sorteos
);

CREATE TABLE confederaciones(
	nombre_confederacion VARCHAR(50) PRIMARY KEY
);

CREATE TABLE equipos(
	nombre VARCHAR(50) PRIMARY KEY,
	puntos NUMERIC,
	bandera VARCHAR(100) NOT NULL,
	estado CHAR(1),
	nombre_confederacion VARCHAR(50),
	CONSTRAINT FK_confederacion FOREIGN KEY(nombre_confederacion) REFERENCES confederaciones
);


CREATE TABLE Posiciones_equipo(
	nombre_equipo VARCHAR(50),
	nombre_grupo_posiciones CHAR(2),
	id_sorteo INT PRIMARY KEY,
	CONSTRAINT FK_id_sorteo FOREIGN KEY(id_sorteo) REFERENCES sorteos,
	CONSTRAINT FK_nombre_equipo FOREIGN KEY(nombre_equipo) REFERENCES equipos
);


/*Insertando equipo*/
CREATE OR REPLACE FUNCTION insertar_equipo(
	e_nombre VARCHAR(50),
	e_puntos NUMERIC,
	e_bandera VARCHAR(100),
	e_estado CHAR(1),
	e_nombre_confederacion VARCHAR(50)	
)RETURNS void AS
$BODY$
BEGIN
	RAISE notice 'Insertando';
	INSERT INTO equipos VALUES (e_nombre,e_puntos,e_bandera,e_estado,e_nombre_confederacion);
	RAISE notice 'Se inserto';
END $BODY$
LANGUAGE plpgsql;






-----------------------------------------------Modificando equipos-----------------------------------

/*Modificando bandera y puntos*/
CREATE OR REPLACE FUNCTION modificar_bandera_puntos(
	m_nombre VARCHAR(50),
	m_bandera VARCHAR(100),
	m_puntos NUMERIC
)RETURNS void AS
$BODY$
BEGIN
	UPDATE equipos SET
		puntos=m_puntos,
		bandera=m_bandera
	WHERE m_nombre=nombre;
END $BODY$
LANGUAGE plpgsql

/*Cambiando estados*/
CREATE OR REPLACE FUNCTION modificar_estado(
	m_nombre VARCHAR(50)
)RETURNS void AS
$BODY$
BEGIN
	IF('1'=(SELECT estado FROM equipos WHERE m_nombre=nombre)) THEN
		UPDATE equipos SET
			estado='0'
		WHERE m_nombre=nombre;
	ELSE
		UPDATE equipos SET
			estado='1'
		WHERE m_nombre=nombre;
		
	END IF;
END $BODY$
LANGUAGE plpgsql

-----------------------------------------Insertar usuario-------------------------------

CREATE OR REPLACE FUNCTION insertar_usuario(
	u_nombre VARCHAR(50),
	u_apellido1 VARCHAR(50),
	u_apellido2 VARCHAR(50),
	u_contraseña CHAR(4),
	u_fecha VARCHAR(50),
	u_nombre_usuario VARCHAR(50)	
)RETURNS void AS
$BODY$
BEGIN
	RAISE notice 'Insertando';
	INSERT INTO usuarios VALUES (u_nombre,u_apellido1,u_apellido2,u_contraseña,cast(u_fecha as timestamp),u_nombre_usuario);
	RAISE notice 'Se inserto';
END $BODY$
LANGUAGE plpgsql;


INSERT INTO confederaciones values ('UEFA');
INSERT INTO confederaciones values ('AFC');
INSERT INTO confederaciones values ('CAF');
INSERT INTO confederaciones values ('CONCACAF');
INSERT INTO confederaciones values ('CONMEBOL');
INSERT INTO confederaciones values ('OFC')
SELECT insertar_equipo('Nueva Zelanda','256.47','//img.fifa.com/images/flags/4/nzl.png','1','OFC'); 
SELECT insertar_equipo('Taiti','181','//img.fifa.com/images/flags/4/tah.png','1','OFC');
SELECT insertar_equipo('Islas Salomon','173.19','//img.fifa.com/images/flags/4/sol.png','1','OFC');
