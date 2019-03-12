import { parse } from 'dotenv';
import { readFileSync } from 'fs';
import { Injectable } from '@nestjs/common';
import { ObjectSchema, string, object, validate, number } from 'joi';

interface EnvConfig {
  [key: string]: string;
}

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(filePath: string) {
    const config = parse(readFileSync(filePath));
    this.envConfig = this.validateInput(config);
  }

  get(key: string) {
    return this.envConfig[key];
  }

  get databasePort(): number {
    return Number(this.get('DATABASE_PORT')) || 5432;
  }

  get databaseHost(): string {
    return this.get('DATABASE_HOST') || 'localhost';
  }

  get databaseUser(): string {
    return this.get('DATABASE_USER');
  }

  get databasePassword(): string {
    return this.get('DATABASE_PASSWORD');
  }

  get databaseName(): string {
    return this.get('DATABASE_NAME');
  }

  private validateInput(envConfig: EnvConfig): EnvConfig {
    const envVarsSchema: ObjectSchema = object({
      NODE_ENV: string()
        .valid(['development', 'production', 'test'])
        .default('development'),
      DATABASE_USER: string(),
      DATABASE_PASSWORD: string(),
      DATABASE_HOST: string(),
      DATABASE_PORT: number(),
      DATABASE_NAME: string(),
    });

    const { error, value: validatedEnvConfig } = validate(
      envConfig,
      envVarsSchema,
    );

    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }

    return validatedEnvConfig;
  }
}
