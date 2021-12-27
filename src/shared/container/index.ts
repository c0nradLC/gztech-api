import { container } from 'tsyringe';

import { INiveisRepository } from '../../modules/Niveis/repositories/INiveisRepository';
import { NiveisRepository } from '../../modules/Niveis/repositories/implementations/NiveisRepository';

import { IDevsRepository } from '../../modules/Devs/repositories/IDevsRepository';
import { DevsRepository } from '../../modules/Devs/repositories/implementations/DevsRepository';

container.registerSingleton<INiveisRepository>(
    'NiveisRepository',
    NiveisRepository
)

container.registerSingleton<IDevsRepository>(
    'DevsRepository',
    DevsRepository
)