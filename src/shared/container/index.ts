import { container } from 'tsyringe';

import { INiveisRepository } from '../../modules/Niveis/repositories/INiveisRepository';
import { NiveisRepository } from '../../modules/Niveis/repositories/implementations/NiveisRepository';

container.registerSingleton<INiveisRepository>(
    'NiveisRepository',
    NiveisRepository
)