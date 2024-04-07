package com.mckcieply.renovationapp.auth.user;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class AppUserService {

    private final AppUserRepository appUserRepository;

    public void saveUser(AppUser user) {
        appUserRepository.save(user);
    }


    public void addRoleToUser(String username, String roleName) {
        // todo: change static user to dynamic
    }

    public AppUserProfileDTO getUser(String username) {
        return mapAppUserToAppUserProfileDTO(appUserRepository.findByUsername(username));
    }

    public List<AppUser> getAllUsers() {
        return appUserRepository.findAll();
    }

    public AppUserProfileDTO updateUser(AppUserProfileDTO appUserProfileDTO) {
        appUserRepository.save(mapAppUserProfileDTOToAppUser(appUserProfileDTO));
        return appUserProfileDTO;
    }

    private AppUserProfileDTO mapAppUserToAppUserProfileDTO(AppUser appUser) {
        return AppUserProfileDTO.builder()
                .username(appUser.getUsername())
                .firstName(appUser.getFirstName())
                .lastName(appUser.getLastName())
                .email(appUser.getEmail())
                .build();
    }

    private AppUser mapAppUserProfileDTOToAppUser(AppUserProfileDTO appUserProfileDTO) {
        return AppUser.builder()
                .username(appUserProfileDTO.getUsername())
                .firstName(appUserProfileDTO.getFirstName())
                .lastName(appUserProfileDTO.getLastName())
                .email(appUserProfileDTO.getEmail())
                .build();
    }

}
