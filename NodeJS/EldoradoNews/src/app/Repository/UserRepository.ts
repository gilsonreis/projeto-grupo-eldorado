import { User } from '../Entities/User';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
class UserRepository extends Repository<User> {
    public PegarPorEmail(email: string) {
        return this.findOne({email});
    }
}

export default UserRepository;