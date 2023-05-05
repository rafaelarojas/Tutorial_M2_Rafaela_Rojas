BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "pessoa" (
	"foto"	TEXT NOT NULL,
	"nome"	TEXT NOT NULL,
	"cargo"	TEXT NOT NULL,
	"cpf"	NUMERIC NOT NULL,
	FOREIGN KEY("cpf") REFERENCES "pessoa"("cpf"),
	PRIMARY KEY("cpf")
);
CREATE TABLE IF NOT EXISTS "dados" (
	"cpf"	INTEGER,
	"endereço"	TEXT NOT NULL,
	"telefone"	NUMERIC NOT NULL,
	"email"	NUMERIC NOT NULL,
	"descrição"	TEXT NOT NULL,
	"id_cpf"	NUMERIC NOT NULL,
	FOREIGN KEY("cpf") REFERENCES "pessoa"("cpf"),
	FOREIGN KEY("email") REFERENCES "dados"("email"),
	FOREIGN KEY("id_cpf") REFERENCES "pessoa"("cpf"),
	PRIMARY KEY("email")
);
CREATE TABLE IF NOT EXISTS "endereco" (
	"rua"	TEXT NOT NULL,
	"numero"	NUMERIC NOT NULL,
	"cep"	NUMERIC NOT NULL,
	"cidade"	TEXT NOT NULL,
	"estado"	TEXT NOT NULL,
	"id_email"	NUMERIC NOT NULL,
	"email"	INTEGER,
	FOREIGN KEY("id_email") REFERENCES "dados"("email"),
	FOREIGN KEY("email") REFERENCES "pessoa"("email")
);
CREATE TABLE IF NOT EXISTS "experiência" (
	"nomeempresa"	TEXT,
	"data"	NUMERIC,
	"cargo"	TEXT,
	"descrição"	TEXT,
	"id_cpf"	NUMERIC NOT NULL,
	"cpf"	INTEGER,
	FOREIGN KEY("id_cpf") REFERENCES "pessoa"("cpf"),
	FOREIGN KEY("cpf") REFERENCES "pessoa"("cpf")
);
CREATE TABLE IF NOT EXISTS "formação" (
	"curso"	TEXT,
	"data"	NUMERIC,
	"descrição"	TEXT,
	"id_cpf"	NUMERIC NOT NULL COLLATE UTF16CI,
	"cpf"	INTEGER,
	FOREIGN KEY("id_cpf") REFERENCES "pessoa"("cpf"),
	FOREIGN KEY("cpf") REFERENCES "pessoa"("cpf")
);
CREATE TABLE IF NOT EXISTS "realizações" (
	"nome"	TEXT,
	"data"	NUMERIC,
	"descrição"	TEXT,
	"id_cpf"	TEXT NOT NULL,
	"cpf"	INTEGER,
	FOREIGN KEY("id_cpf") REFERENCES "pessoa"("cpf"),
	FOREIGN KEY("cpf") REFERENCES "pessoa"("cpf")
);
CREATE TABLE IF NOT EXISTS "personalidade" (
	"personalidade"	TEXT,
	"id_email"	TEXT NOT NULL,
	"email"	INTEGER,
	FOREIGN KEY("email") REFERENCES "pessoa"("email"),
	FOREIGN KEY("id_email") REFERENCES "dados"("email")
);
CREATE TABLE IF NOT EXISTS "habilidade" (
	"habilidade"	TEXT,
	"id_email"	TEXT NOT NULL,
	"email"	INTEGER,
	FOREIGN KEY("email") REFERENCES "pessoa"("email"),
	FOREIGN KEY("id_email") REFERENCES "dados"("email")
);
COMMIT;
