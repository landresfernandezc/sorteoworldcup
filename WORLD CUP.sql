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
	fecha TIMESTAMP,
	CONSTRAINT FK_nmbre_u FOREIGN KEY(nombre_usuario) REFERENCES usuarios
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
	id_sorteo INT,
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
INSERT INTO confederaciones values ('OFC');

SELECT * FROM sorteos



CREATE OR REPLACE FUNCTION insertar_sorteo(
	s_nombre_usuario VARCHAR(50),
	s_fecha VARCHAR (50),
	au VARCHAR(50),
	ad VARCHAR(50),
	at VARCHAR(50),
	ac VARCHAR(50),
	bu VARCHAR(50),
	bd VARCHAR(50),
	bt VARCHAR(50),
	bc VARCHAR(50),
	cu VARCHAR(50),
	cd VARCHAR(50),
	ct VARCHAR(50),
	cc VARCHAR(50),
	du VARCHAR(50),
	dd VARCHAR(50),
	dt VARCHAR(50),
	dc VARCHAR(50),
	eu VARCHAR(50),
	ed VARCHAR(50),
	et VARCHAR(50),
	ec VARCHAR(50),
	fu VARCHAR(50),
	fd VARCHAR(50),
	ft VARCHAR(50),
	fc VARCHAR(50),
	gu VARCHAR(50),
	gd VARCHAR(50),
	gt VARCHAR(50),
	gc VARCHAR(50),
	hu VARCHAR(50),
	hd VARCHAR(50),
	ht VARCHAR(50),
	hc VARCHAR(50)
	)
RETURNS void AS
$BODY$
DECLARE id CHAR(2);
BEGIN
	
	INSERT INTO sorteos(nombre_usuario,fecha)VALUES(s_nombre_usuario,cast(s_fecha as timestamp)) RETURNING id_sorteos INTO id;

	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(au,'a1',CAST(id as INTEGER));
	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(ad,'a2',CAST(id as INTEGER));
	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(at,'a3',CAST(id as INTEGER));
	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(ac,'a4',CAST(id as INTEGER));
	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(bu,'b1',CAST(id as INTEGER));
	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(bd,'b2',CAST(id as INTEGER));
	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(bt,'b3',CAST(id as INTEGER));
	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(bc,'b4',CAST(id as INTEGER));
	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(cu,'c1',CAST(id as INTEGER));
	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(cd,'c2',CAST(id as INTEGER));
	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(ct,'c3',CAST(id as INTEGER));
	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(cc,'c4',CAST(id as INTEGER));
	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(du,'d1',CAST(id as INTEGER));
	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(dd,'d2',CAST(id as INTEGER));
	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(dt,'d3',CAST(id as INTEGER));
	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(dc,'d4',CAST(id as INTEGER));
	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(eu,'e1',CAST(id as INTEGER));
	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(ed,'e2',CAST(id as INTEGER));
	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(et,'e3',CAST(id as INTEGER));
	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(ec,'e4',CAST(id as INTEGER));
	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(fu,'f1',CAST(id as INTEGER));
	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(fd,'f2',CAST(id as INTEGER));
	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(ft,'f3',CAST(id as INTEGER));
	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(fc,'f4',CAST(id as INTEGER));
	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(gu,'g1',CAST(id as INTEGER));
	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(gd,'g2',CAST(id as INTEGER));
	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(gt,'g3',CAST(id as INTEGER));
	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(gc,'g4',CAST(id as INTEGER));
	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(hu,'h1',CAST(id as INTEGER));
	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(hd,'h2',CAST(id as INTEGER));
	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(ht,'h3',CAST(id as INTEGER));
	INSERT INTO posiciones_equipo(nombre_equipo,nombre_grupo_posiciones,id_sorteo)VALUES(hc,'h4',CAST(id as INTEGER));
	
END $BODY$
LANGUAGE plpgsql;



SELECT * FROM equipos


SELECT insertar_sorteo('landresf12','11-10-2017 00:00:00','Alemania','Inglaterra','Gales','Polonia','Argentina','Chile','Suiza','Francia','Croacia','Uruguay','Costa Rica','Islandia','Dinamarca','Suecia','Egipto','Escocia','Ucrania','Senegal','Bulgaria','Paraguay','Austria','Nigeria','Grecia','Rumanía','Panamá','Venezuela','Bolivia','Hungría','Jamaica','Noruega','Rusia','Guinea')





SELECT * from posiciones_equipo






