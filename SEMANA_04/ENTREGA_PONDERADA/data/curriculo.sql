BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "formacao" (
	"pessoa_id"	INTEGER NOT NULL,
	"intituicao"	TEXT,
	"curso"	TEXT,
	"data"	TEXT,
	"descricao"	TEXT,
	FOREIGN KEY("pessoa_id") REFERENCES "pessoa"("id_pessoa")
);
CREATE TABLE IF NOT EXISTS "experiencia" (
	"pessoa_id"	INTEGER NOT NULL,
	"nome_empresa"	TEXT,
	"data"	TEXT,
	"cargo"	TEXT,
	"descricao"	TEXT,
	FOREIGN KEY("pessoa_id") REFERENCES "pessoa"("id_pessoa")
);
CREATE TABLE IF NOT EXISTS "realizacoes" (
	"pessoa_id"	INTEGER NOT NULL,
	"empresa"	TEXT,
	"cargo"	TEXT,
	"descricao"	TEXT,
	FOREIGN KEY("pessoa_id") REFERENCES "pessoa"("id_pessoa")
);
CREATE TABLE IF NOT EXISTS "habilidades" (
	"pessoa_id"	INTEGER NOT NULL,
	"habilidades"	TEXT NOT NULL,
	FOREIGN KEY("pessoa_id") REFERENCES "pessoa"("id_pessoa")
);
CREATE TABLE IF NOT EXISTS "personalidade" (
	"pessoa_id"	INTEGER NOT NULL,
	"personalidades"	TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS "pessoa" (
	"id_pessoa"	INTEGER NOT NULL,
	"nome"	TEXT NOT NULL,
	"cargo"	TEXT NOT NULL,
	"telefone"	NUMERIC NOT NULL,
	"email"	TEXT NOT NULL,
	PRIMARY KEY("id_pessoa")
);
INSERT INTO "pessoa" ("id_pessoa","nome","cargo","telefone","email") VALUES (1,'Raphaela','Teste','11-12345-6789','rapha@teste.com');
COMMIT;
